class Youtube{
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mostPopular(){
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result.items;
    }
    
    async search(query){
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId })); //id를 받아서 새로운 오브젝트를 생성 기존정보를유지하고 id만 오브젝트가 아닌 video id 로 덮어줌  
    }
}

export default Youtube;