#!/bin/sh -l
echo "Hello $1"
echo "Mahendra"
$(ls)
$(date)
whispers ./secrets-not-allowed >> output.txt
filecontent=`cat output.txt`
echo "$filecontent"
echo "::set-output name=time::$filecontent"