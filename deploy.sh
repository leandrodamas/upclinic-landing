#!/bin/bash
echo "🔨 Building SvelteKit application..."
npm run build

if [ -d "build" ]; then
  echo "✅ Build successful!"
  echo "🚀 Deploying to Firebase Hosting..."
  firebase deploy --only hosting:site-upclinic
else
  echo "❌ Build failed - build directory not found"
  exit 1
fi

