WIDTH=200
HEIGHT=300
cp ./originals/*.jpg ./originals/resized/
find ./ -iwholename './originals/resized/*.jpg' -exec convert \{} -verbose -resize $WIDTHx$HEIGHT\> \{} \;