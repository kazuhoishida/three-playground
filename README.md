# three-playground

React + three.js playground project associated with anice-lab members.
feel free to jump in!

### I'm using...

- vite
- tailwind/postcss
- @react-three/fiber
- @react-three/drei
- gsap

& deploy to github pages

### deploy to github page

```
yarn build

#need to add force option
git add src/dist/ -f
git commit -m "build"

#push to gh-pages branch
git subtree push --prefix src/dist origin gh-pages
```
