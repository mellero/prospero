#/bin/bash

# Find "this" inside of 2.txt and replace it with the output of "cat 1.txt"
# sed "s/this/$(cat 1.txt)/g" 2.txt > 3.txt

## LANDING

# Replace panel
/\${panel}/ {
  r landing/panel.html
  d
}
/\${panel}/d

# sed -f combine.sed landing-sk.html > ../src/landing-out.html

