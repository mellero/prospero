#/bin/bash

# Find "this" inside of 2.txt and replace it with the output of "cat 1.txt"
# sed "s/this/$(cat 1.txt)/g" 2.txt > 3.txt

## RESULTS

# Replace results-panel
/\${results-panel}/ {
  r results/panel.html
  d
}
/\${results-panel}/d

# Replace sort-bar
/\${sort-bar}/ {
  r results/sort-bar.html
  d
}
/\${sort-bar}/d

# Replace result-card
/\${result-card}/ {
  r results/result-card.html
  d
}
/\${result-card}/d


# sed -f combine.sed landing-sk.html > ../src/landing-out.html

