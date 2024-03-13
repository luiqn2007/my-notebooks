#!/bin/bash

git add -A
git commit -m "auto-push"
git push -f

/home/lq2007/ossutil/ossutil64 sync /siyuan/workspace/data/assets oss://notebook-backup-lq2007/siyuan --update -f
