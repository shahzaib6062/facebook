import React from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="Feed_story">
      <StoryReel />
      <MessageSender />
      <Post
        Profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU"
        Name="Shahzaib"
        Message="Wow it is working"
        PostImg="https://s.yimg.com/uu/api/res/1.2/wDUcCpwMdVug0utjT2q_Jg--~B/Zmk9ZmlsbDtoPTI3OTt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-09/06906560-1fb9-11ec-bf3e-8ed49ffe5e26.cf.jpg"
      />
      <Post
        Profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU"
        Name="Shahzaib"
        Message="Wow it is working"
        PostImg="https://s.yimg.com/uu/api/res/1.2/wDUcCpwMdVug0utjT2q_Jg--~B/Zmk9ZmlsbDtoPTI3OTt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-09/06906560-1fb9-11ec-bf3e-8ed49ffe5e26.cf.jpg"
      />
      <Post
        Profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU"
        Name="Shahzaib"
        Message="Wow it is working"
        PostImg="https://s.yimg.com/uu/api/res/1.2/wDUcCpwMdVug0utjT2q_Jg--~B/Zmk9ZmlsbDtoPTI3OTt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-09/06906560-1fb9-11ec-bf3e-8ed49ffe5e26.cf.jpg"
      />
      <Post
        Profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU"
        Name="Shahzaib"
        Message="Wow it is working"
        PostImg="https://s.yimg.com/uu/api/res/1.2/wDUcCpwMdVug0utjT2q_Jg--~B/Zmk9ZmlsbDtoPTI3OTt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-09/06906560-1fb9-11ec-bf3e-8ed49ffe5e26.cf.jpg"
      />
    </div>
  );
};

export default Feed;
