# Git Workflow Guide: Organizing History with Feature Branches

## Overview
This guide explains how to organize git history with feature branches and backdated commits, simulating a professional development workflow.

## Key Git Concepts Used

### 1. Feature Branches
**Purpose**: Isolate work on specific features
```bash
# Create and switch to new branch
git checkout -b feature/database-schema

# List all branches
git branch

# Switch between branches
git checkout main
git checkout feature/database-schema
```

### 2. Backdating Commits
**Purpose**: Set commit timestamps to past dates

**Method 1: Environment Variables (Recommended)**
```bash
export GIT_AUTHOR_DATE="2025-12-20 09:30:00"
export GIT_COMMITTER_DATE="2025-12-20 09:30:00"
git add file.ts
git commit -m "feat: add feature"
```

**Method 2: Using --date flag**
```bash
git commit --date="2025-12-20 09:30:00" -m "feat: add feature"
```

**Note**: Method 1 is more reliable and sets both author and committer dates.

### 3. Selective Staging
**Purpose**: Commit related files together logically
```bash
# Stage specific files
git add src/db/schema.ts
git add src/db/index.ts
git commit -m "feat(db): add database schema and connection"

# Stage all changes (use carefully)
git add .
git commit -m "message"
```

### 4. Merge Commits (--no-ff)
**Purpose**: Create visible merge commits that preserve branch history

```bash
# Switch to main branch
git checkout main

# Merge feature branch with --no-ff (no fast-forward)
git merge --no-ff feature/database-schema -m "Merge feature/database-schema: database setup"

# What --no-ff does:
# - Creates a merge commit even if fast-forward is possible
# - Preserves the branch structure in history
# - Makes it look like PRs were merged
```

**Without --no-ff**: Commits would be linear (fast-forward)
**With --no-ff**: Creates merge commits showing branch structure

### 5. Conventional Commit Messages
**Format**: `type(scope): description`

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `chore`: Maintenance tasks
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring

**Examples**:
```bash
git commit -m "feat(db): add articles schema"
git commit -m "fix(ui): resolve button styling issue"
git commit -m "chore: update dependencies"
```

## Complete Workflow Example

### Step 1: Create Feature Branch
```bash
git checkout main
git checkout -b feature/authentication
```

### Step 2: Make Incremental Commits
```bash
# Commit 1: Add dependency
export GIT_AUTHOR_DATE="2025-12-23 16:00:00"
export GIT_COMMITTER_DATE="2025-12-23 16:00:00"
git add package.json
git commit -m "feat(auth): add Stack Auth dependency"

# Commit 2: Add client config
export GIT_AUTHOR_DATE="2025-12-24 09:00:00"
export GIT_COMMITTER_DATE="2025-12-24 09:00:00"
git add src/stack/client.tsx
git commit -m "feat(auth): configure Stack Auth client"

# Commit 3: Add server config
export GIT_AUTHOR_DATE="2025-12-24 10:30:00"
export GIT_COMMITTER_DATE="2025-12-24 10:30:00"
git add src/stack/server.tsx
git commit -m "feat(auth): configure Stack Auth server"
```

### Step 3: Merge Back to Main
```bash
git checkout main
git merge --no-ff feature/authentication -m "Merge feature/authentication: Stack Auth integration"
```

### Step 4: Repeat for Next Feature
```bash
git checkout -b feature/ui-components
# ... make commits ...
git checkout main
git merge --no-ff feature/ui-components -m "Merge feature/ui-components: base UI components"
```

## Useful Git Commands for Review

### View History
```bash
# Simple log
git log --oneline

# Visual graph of branches
git log --oneline --graph --all

# Show dates
git log --format="%ai %s"

# Show last N commits
git log -10
```

### Check Status
```bash
# See what's changed
git status

# See changes in detail
git diff

# See staged changes
git diff --staged
```

### Resolve Merge Conflicts
```bash
# When merge conflict occurs:
git status  # See conflicted files

# Edit files to resolve conflicts, then:
git add resolved-file.ts
git commit -m "Merge feature/branch-name"
```

## Tips for Professional History

1. **Small, Logical Commits**: Each commit should represent one logical change
2. **Descriptive Messages**: Use conventional commit format
3. **Consistent Dates**: Distribute commits naturally across time
4. **Feature Branches**: One feature per branch
5. **Merge Commits**: Use --no-ff to show branch structure

## Common Patterns

### Pattern 1: Setup → Feature → Polish
```bash
setup/project-foundation → feature/database → feature/ui → feature/styling
```

### Pattern 2: Dependencies First
```bash
# Always commit dependencies before using them
git commit -m "feat: add package dependency"
git commit -m "feat: use dependency in code"
```

### Pattern 3: Incremental Development
```bash
# Build features incrementally
git commit -m "feat: create base component"
git commit -m "feat: add component variants"
git commit -m "feat: integrate component"
```

## Summary

The workflow creates a professional git history by:
1. ✅ Creating feature branches for isolation
2. ✅ Making small, logical commits
3. ✅ Backdating commits across a timeline
4. ✅ Merging with --no-ff to show branch structure
5. ✅ Using conventional commit messages

This simulates a real development workflow where features are developed in branches and merged via PRs!

