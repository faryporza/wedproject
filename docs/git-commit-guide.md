# Git Commit Guide

## Basic Git Commit Steps

1. Stage your changes:
```bash
git add <filename>    # Stage specific file
git add .            # Stage all changes
```

2. Check status (optional but recommended):
```bash
git status           # See what files are staged
```

3. Commit your changes:
```bash
git commit -m "Your commit message"
```

## Best Practices

- Write clear, descriptive commit messages
- Each commit should represent a single logical change
- Keep commits small and focused
- Use present tense in commit messages (e.g., "Add feature" not "Added feature")

## Common Commands

```bash
git commit -am "Message"    # Stage and commit all modified files in one command
git commit --amend         # Modify the most recent commit
git log                    # View commit history
```
