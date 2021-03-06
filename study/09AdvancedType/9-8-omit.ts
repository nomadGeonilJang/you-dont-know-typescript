{
    //pick 반대
    type Video = {
        id:string;
        title:string;
        url:string;
        data:string;
    }


    function getVideo(id:string):Video{
        return {
            id,
            title:'s',
            url:'d',
            data:'dd'
        }
    }


    // 조금 제한 적인 타입을 사용하고 싶을때 사용합니다.
    type VideoMetaData = Omit<Video, 'id' | 'title' | 'hello'>
    function getVideoMetaData(id:string):VideoMetaData{
        return {
           url:'s',
           data:'s',
        }
    }


}

