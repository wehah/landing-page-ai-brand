import { image } from "motion/react-client";

const ImageUrls = {
  //   image1:
  //     "https://images.unsplash.com/photo-1656153816323-f3a8186cb239?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   image2:
  //     "https://images.unsplash.com/photo-1712246754649-119c1cef4a43?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image3:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image4:
    "https://images.unsplash.com/photo-1694061426908-a88297d968f9?q=80&w=1265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image5:
    "https://images.unsplash.com/photo-1636969350238-a678edbbbb67?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image6:
    "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image7:
    "https://images.unsplash.com/photo-1660405803327-c3cf599cbf1b?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image8:
    "https://images.unsplash.com/photo-1655634627107-da33d1c1cf02?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image9:
    "https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image10:
    "https://images.unsplash.com/photo-1573588028698-f4759befb09a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image11:
    "https://images.unsplash.com/photo-1654859869130-fd0a2aa5539b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image12:
    "https://images.unsplash.com/photo-1715416751848-fc2f81e200df?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image13:
    "https://images.unsplash.com/photo-1608742213509-815b97c30b36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image14:
    "https://images.unsplash.com/photo-1655721532356-e9a529d403c6?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image15:
    "https://images.unsplash.com/photo-1655721533383-49c032c9cd1f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image16:
    "https://images.unsplash.com/photo-1665690399857-9de8bbbeb108?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image17:
    "https://images.unsplash.com/photo-1655635643486-a17bc48771ff?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image18:
    "https://images.unsplash.com/photo-1655720033654-a4239dd42d10?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image19:
    "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image20:
    "https://images.unsplash.com/photo-1569396116180-210c182bedb8?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image21:
    "https://images.unsplash.com/photo-1664448003794-2d446c53dcae?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image22:
    "https://images.unsplash.com/photo-1717501219621-7b860d789a2e?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  video1:
    "https://videos.pexels.com/video-files/25744130/11904084_2560_1440_24fps.mp4",
  video2:
    "https://videos.pexels.com/video-files/18069863/18069863-uhd_1440_2560_24fps.mp4",
  video3:
    "https://videos.pexels.com/video-files/18068805/18068805-uhd_1440_2558_24fps.mp4",
};

export default ImageUrls;
