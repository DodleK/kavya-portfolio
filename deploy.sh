
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# If you're deploying to a custom domain, uncomment the line below and replace with your domain
# echo 'yourdomain.com' > CNAME

# initialize git repository if not already done
git init
git checkout -b main
git add -A
git commit -m 'deploy'

# replace 'username' with your GitHub username and 'repository-name' with your repository name
git push -f git@github.com:dodlekavyakasthuri/kavya-portfolio.git main:gh-pages

cd -
