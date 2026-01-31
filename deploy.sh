#!/bin/bash

# Vercel Deployment Script for WiCyS India Website
# Run this script to deploy your website

echo "🚀 Starting Vercel Deployment..."

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

# Deploy to Vercel
echo "📦 Deploying to Vercel..."
npx vercel --prod --yes

echo "✅ Deployment complete!"
echo "🌐 Your website should be live at the URL shown above"

