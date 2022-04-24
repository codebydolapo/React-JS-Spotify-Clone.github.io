import React from 'react';
import SidebarOption from './SidebarOption'
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";
import {useData} from './DataLayer'

function Sidebar(){

  const [{ playlists }, dispatch] = useData();

    

  return (
    <div className="sidebar-main">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        className="sidebar-logo"
        alt=""
      />

      <div className="options-div">
        <SidebarOption Icon={HomeIcon} title={"Home"} />
        <SidebarOption Icon={SearchIcon} title={"Search"} />
        <SidebarOption Icon={LibraryMusicIcon} title={"Your Library"} />
      </div>

      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((item)=>{
          return <SidebarOption title={item.name} />

      })}
      
    </div>
  );

}

export default Sidebar;