#!/bin/bash

echo -n "commit: "
read commit

commit_message="$(date "+%Y-%m-%d %H:%M") / $commit"
echo "commit: $commit_message"

git add -A
git commit -m "$commit_message"
git push -f
