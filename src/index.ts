#!/usr/bin/env node
import * as p from '@clack/prompts';
import chalk from 'chalk';
import degit from 'degit';
import { execa } from 'execa';
import fs from 'fs';
import path from 'path';

function getPackageManager() {
    const userAgent = process.env.npm_config_user_agent;
    if (userAgent) {
        if (userAgent.includes('pnpm')) return 'pnpm';
        if (userAgent.includes('yarn')) return 'yarn';
        if (userAgent.includes('bun')) return 'bun';
    }
    return 'npm';
}

async function main() {
    console.clear();

    p.intro(chalk.bgBlue.white(' Welcome to Next-Nest-Auth Starter Kit '));

    const pkgManager = getPackageManager();

    // Ask about project
    const project = await p.group(
        {
            path: () =>
                p.text({
                    message: 'Enter your project name',
                    placeholder: 'my-awesome-app',
                    validate: (value: string) => {
                        if (!value) return 'Please enter a name';
                        if (fs.existsSync(value))
                            return 'Directory already exists';
                    },
                }),
            auth: () =>
                p.select({
                    message: 'Select authentication library',
                    options: [
                        { value: 'better-auth', label: 'Better-Auth (Recommended)', hint: 'Modern and flexible' },
                        { value: 'auth-js', label: 'Auth.js (NextAuth)', hint: 'Traditional choice' },
                    ],
                }),
            install: () =>
                p.confirm({
                    message: 'Do you want to auto install dependencies?',
                    initialValue: true,
                }),
        },
        {
            onCancel: () => {
                p.cancel('Operation cancelled.');
                process.exit(0);
            },
        }
    );

    const s = p.spinner();

    // Clone template
    s.start('Downloading template...');

    // Repository links
    const REPOS = {
        'better-auth': 'https://github.com/Deveripon/Next-Nest-Better-Auth.git',
        'auth-js': 'https://github.com/Deveripon/next-nest-auth-js-starterkit.git',
    };

    const TEMPLATE_REPO = REPOS[project.auth as keyof typeof REPOS];

    const emitter = degit(TEMPLATE_REPO, {
        cache: false,
        force: true,
    });

    try {
        await emitter.clone(project.path);
        s.stop(chalk.green('Download completed!'));
    } catch (err) {
        s.stop(chalk.red('Download failed!'));
        console.error(err);
        p.note(
            `Failed to clone ${TEMPLATE_REPO}. Make sure the repository exists and is public.`,
            'Error'
        );
        process.exit(1);
    }

    // Install dependencies
    if (project.install) {
        s.start(`Installing packages with ${pkgManager}...`);
        try {
            await execa(pkgManager, ['install'], {
                cwd: path.join(process.cwd(), project.path),
                stdio: 'inherit',
            });
            s.stop(chalk.green('Installation completed!'));
        } catch (err: any) {
            s.stop(chalk.red(`Installation failed with ${pkgManager}.`));
            p.note(
                `The installation command failed. You might need to run "${pkgManager} install" manually in the project directory.\n\nError details: ${err.message}`,
                'Installation Error'
            );
        }
    }

    const cdCommand = `cd ${project.path}`;
    const startCommand =
        pkgManager === 'npm' ? 'npm run dev' : `${pkgManager} dev`;

    p.note(`${cdCommand}\n${startCommand}`, 'Next.js app is ready!');

    p.outro(chalk.blue('Happy coding! 🚀'));
}

main().catch(err => {
    console.error(chalk.red('An unexpected error occurred:'));
    console.error(err);
    process.exit(1);
});

