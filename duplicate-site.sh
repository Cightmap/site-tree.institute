#!/bin/bash

# Check if a domain name was provided
if [ -z "$1" ]; then
  echo "Please provide a domain name (e.g., ./duplicate-site.sh SEOdit.com)"
  exit 1
fi

# Variables
TEMPLATE_DIR="domain-template"
INPUT_DOMAIN="$1"  # Preserve exact input (e.g., SEOdit.com, seoDIT.com)
# Convert to lowercase for directory name and package name (e.g., seodit.com)
LOWERCASE_DOMAIN=$(echo "$INPUT_DOMAIN" | tr '[:upper:]' '[:lower:]')
PACKAGE_NAME="${LOWERCASE_DOMAIN//./-}"  # Replace dots with hyphens (e.g., seodit-com)
NEW_DIR="site-$LOWERCASE_DOMAIN"

# Copy the template to a new folder
echo "Copying template to $NEW_DIR..."
cp -r "$TEMPLATE_DIR" "$NEW_DIR"

# Change into the new directory
cd "$NEW_DIR" || exit

# Remove node_modules and lockfiles to avoid issues
rm -rf node_modules package-lock.json pnpm-lock.yaml

# Replace domain-specific strings
echo "Updating domain references to $INPUT_DOMAIN..."
# Use lowercase in astro.config.mjs for URL consistency
sed -i '' "s/humanverified.org/$LOWERCASE_DOMAIN/g" astro.config.mjs 2>/dev/null || true
# Update package.json name and build script
sed -i '' "s/\"name\": \"humanverified-org\"/\"name\": \"$PACKAGE_NAME\"/g" package.json 2>/dev/null || true
sed -i '' "s/\"build\": \"astro build\"/\"build\": \"astro build && mv dist\/sitemap-0.xml dist\/sitemap.xml\"/g" package.json 2>/dev/null || true
# Use exact input capitalization for display text
sed -i '' "s/humanverified.org/$INPUT_DOMAIN/g" src/pages/index.astro src/layouts/Layout.astro src/layouts/BlogLayout.astro src/pages/blog/*.astro src/content/blog/*.md 2>/dev/null || true
sed -i '' "s/HumanVerified.org/$INPUT_DOMAIN/g" src/pages/index.astro src/layouts/Layout.astro src/layouts/BlogLayout.astro src/pages/blog/*.astro 2>/dev/null || true

echo "New site created in $NEW_DIR! Run 'npm install' or 'pnpm install' and customize."