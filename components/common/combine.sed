#/bin/bash

# Find "this" inside of 2.txt and replace it with the output of "cat 1.txt"
# sed "s/this/$(cat 1.txt)/g" 2.txt > 3.txt

## COMMON

# Replace head
/\${head}/ {
  r common/head.html
  d
}
/\${head}/d

# Replace nav
/\${nav}/ {
  r common/nav.html
  d
}
/\${nav}/d

# Replace footer
/\${footer}/ {
  r common/footer.html
  d
}
/\${footer}/d

# sed -f combine.sed landing-sk.html > ../src/landing-out.html

