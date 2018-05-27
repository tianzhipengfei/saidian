// pages/index/index.js
Page({
    data: {
        hasPush: false,
        advertisementList:[
            {
                "id": 1,
                "firstImage": "http://www.thecolorrun.com.cn/Public/Fg/images/mid_1.jpg"
            },
            {
                "id": 2,
                "firstImage": "http://www.lovefoamrun.com/images/2017/2017Page2.jpg"
            }
        ],
        typeList: [
            {
                description: "篮球",
                iconPath: "/images/index/basketball.png"
            },
            {
                description: "足球",
                iconPath: "/images/index/soccer.png"
            },
            {
                description: "网球",
                iconPath: "/images/index/tennis.png"
            },
            {
                description: "羽毛球",
                iconPath: "/images/index/badminton.png"
            },
            {
                description: "游泳",
                iconPath: "/images/index/swim.png"
            },
            {
                description: "健身",
                iconPath: "/images/index/body.png"
            },
            {
                description: "滑冰",
                iconPath: "/images/index/skate.png"
            },
            {
                description: "更多",
                iconPath: "/images/index/sportelse.png"
            }
        ],
        normalAdverList:[
            {
                "name": "世纪星滑冰场",
                "showImage": "http://t11.baidu.com/it/u=3307023253,2744795862&fm=173&s=3731318FAE3A76805610CCC90300D037&w=640&h=396&img.JPEG",
                "price": "137",
                "score": 4
            },
            {
                "name": "来福珈阳光国际健身会所",
                "showImage": "https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/09fa513d269759eeaa0dc697bbfb43166d22df09.jpg",
                "price": "38",
                "score": 3
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})