set -e

npm run build

cd dist
# В папке dist создаётся репозиторий, который пушится в ветку gh-pages
git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f https://github.com/Jet-Green/IWantEvent.git main:gh-pages

cd ..