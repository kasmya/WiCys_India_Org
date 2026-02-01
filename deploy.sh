#!/bin/bash

# Vercel Deployment Script for WiCyS India Website
# Run this script to fix permission issues and deploy

set -e  # Exit on error

echo "🚀 Starting Vercel Deployment with Permission Fix..."

# Step 1: Fix node_modules permission issue
echo "🔧 Step 1: Removing node_modules from git tracking..."

# Check if node_modules is tracked by git
if git ls-files node_modules --error-unmatch node_modules >/dev/null 2>&1; then
    echo "⚠️  Found node_modules in git - removing..."
    git rm -r --cached node_modules
    echo "✅ node_modules removed from git tracking"
else
    echo "✅ node_modules is not tracked by git (good!)"
fi

# Step 2: Ensure .gitignore has node_modules
echo ""
echo "🔧 Step 2: Checking .gitignore..."
if [ -f .gitignore ]; then
    if grep -q "^node_modules/" .gitignore; then
        echo "✅ node_modules is already in .gitignore"
    else
        echo "node_modules/" >> .gitignore
        echo "✅ Added node_modules/ to .gitignore"
    fi
else
    echo "node_modules/" > .gitignore
    echo "✅ Created .gitignore with node_modules/"
fi

# Step 3: Commit changes
echo ""
echo "🔧 Step 3: Committing fix..."
git add .gitignore
git commit -m "fix: remove node_modules from git (fixes Vercel permission error)" || echo "No changes to commit"
git push origin main || echo "Push failed - you may need to pull first"

# Step 4: Clean local node_modules (optional but recommended)
echo ""
echo "🔧 Step 4: Cleaning local node_modules..."
rm -rf node_modules
echo "✅ node_modules removed locally"

# Step 5: Reinstall dependencies with correct permissions
echo ""
echo "🔧 Step 5: Reinstalling dependencies..."
npm install
echo "✅ Dependencies installed with correct permissions"

# Step 6: Build locally to verify
echo ""
echo "🔧 Step 6: Building locally to verify..."
npm run build
echo "✅ Build successful!"

# Step 7: Deploy to Vercel
echo ""
echo "🔧 Step 7: Deploying to Vercel..."

# Check if user is logged in
if ! npx vercel whoami &> /dev/null; then
    echo "⚠️  You need to log in to Vercel first!"
    echo ""
    echo "Step 1: Go to https://vercel.com"
    echo "Step 2: Sign up with GitHub"
    echo "Step 3: Import your repository: https://github.com/kasmya/WiCys_India_Org"
    echo ""
    echo "OR log in via CLI:"
    echo "npx vercel login"
    exit 1
fi

npx vercel --prod --yes

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your website should be live at the URL shown above"
echo ""
echo "📝 Note: Vercel will automatically rebuild from the fixed repository."

