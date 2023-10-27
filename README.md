# memehub
Project Description:-
MemeHub is a dynamic web application that allows users to search for and explore memes from the Imgflip API. It features a responsive and user-friendly interface with a real-time search bar, providing a seamless and enjoyable meme discovery experience. Users can click on meme thumbnails to view full-size images in an elegant modal interface powered by Reactstrap.

Project Requirement:-
Find the list of all by making an get request to this https://api.imgflip.com/get_memes
Response look something like this:-
{"id":"181913649","name":"Drake Hotline Bling","url":"https:\/\/i.imgflip.com\/30b1gx.jpg","width":1200,"height":1200,"box_count":2,"captions":1159000}
Make a page,design it however you want, It has to have
1) A search input which changes as you type in the search query, it searches in the “name” attribute and shows the list in table form (this search should be case insensitive).
2) Column heading - Sr no., Name, Image
3) And this table should only come when either you have typed anything or have found any match.
4) Use reactstrap Modal to open the image in Modal when user clicks on the image in the table

If you want to run this project. Simple clone it. and run Command "npm install". after it it will install node_modules folder. now can you can run this project using "npm start".

screen:
First Page:
![image](https://github.com/rahulgupta020/memehub/assets/42673573/6b60f1a2-3cf4-4c33-81f2-515aa87d711f)

Input Search:
![image](https://github.com/rahulgupta020/memehub/assets/42673573/af31607c-e238-46de-bd97-ef411dcb1d15)

Image Click Model:-
![image](https://github.com/rahulgupta020/memehub/assets/42673573/b358d22a-f714-44e1-9e47-40e0510f7bb2)
