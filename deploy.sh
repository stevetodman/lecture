#!/bin/bash

# Differential Cyanosis Visualization - Netlify Deployment Script
# Run this script from your local machine after installing Netlify CLI

set -e

echo "🫀 Differential Cyanosis Visualization - Netlify Deploy"
echo "========================================================"
echo ""

# Check if netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found!"
    echo ""
    echo "Installing Netlify CLI..."
    npm install -g netlify-cli
    echo "✅ Netlify CLI installed!"
    echo ""
fi

# Check if logged in
echo "🔐 Checking Netlify authentication..."
if ! netlify status &> /dev/null; then
    echo "🔑 Please login to Netlify (browser will open)..."
    netlify login
fi

echo ""
echo "📦 Preparing deployment..."
echo "   Files: index.html, netlify.toml"
echo ""

# Deploy to production
echo "🚀 Deploying to Netlify..."
netlify deploy --prod --dir=.

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🎉 Your visualization is now live!"
echo ""
echo "📝 Next steps:"
echo "   1. Visit the URL provided above"
echo "   2. Customize site name in Netlify dashboard"
echo "   3. Share with colleagues and students"
echo ""
echo "🔗 Quick links:"
echo "   Dashboard: https://app.netlify.com"
echo "   Drop: https://app.netlify.com/drop"
echo ""
