// pages/type/type.js
var sportTypeSelectedNum = 0
var typeSelectedNum = 0


Page({

    /**
     * 页面的初始数据
     */
    data: {
        typeList: [
            {
                "name": "体育培训",
                "id": 0,
                isSelected: true
            },
            {
                "name": "体育赛事",
                "id": 1,
                isSelected: false

            }

        ],
        sportTypeList: [
            {
                "name": "路跑",
                "id": 0,
                "isSelected": true
            },
            {
                "name": "篮球",
                "id": 1,
                "isSelected": false
            },
            {
                "name": "足球",
                "id": 2,
                "isSelected": false
            },
            {
                "name": "网球",
                "id": 3,
                "isSelected": false
            },
            {
                "name": "羽毛球",
                "id": 4,
                "isSelected": false
            },
            {
                "name": "乒乓球",
                "id": 5,
                "isSelected": false
            },
            {
                "name": "其他",
                "id": 6,
                "isSelected": false
            }
        ],
        normalAdverList: [
            {
                "name": "东方启明星",
                "showImage": "http://p89j30z7g.bkt.clouddn.com/启明星1.jpg",
                "price": "137",
                "score": 4
            },
            {
                "name": "优肯篮球培训",
                "showImage": "http://p89j30z7g.bkt.clouddn.com/优肯1.jpg",
                "price": "38",
                "score": 3
            },
            {
                "name": "姚明说姚明的篮球俱乐部就是姚明篮球俱乐部不是姚明篮球培训班",
                "showImage": "http://p89j30z7g.bkt.clouddn.com/姚明1.jpg",
                "price": "137",
                "score": 4
            },
            {
                "name": "哈林秀王",
                "showImage": "http://p89j30z7g.bkt.clouddn.com/哈林1.jpg",
                "price": "38",
                "score": 3
            }
        ]
    },

    //选择上侧不同的类别
    selectType: function(options){
        let currentTypeSelectedNum = options.target.id
        // 如果点的和现在显示的一样，直接返回
        if (typeSelectedNum == currentTypeSelectedNum) {
            return
        }
        // 否则更新选择的项目
        this.data.typeList[typeSelectedNum].isSelected = false;
        this.data.typeList[currentTypeSelectedNum].isSelected = true;
        typeSelectedNum = currentTypeSelectedNum
        this.setData({
            typeList: this.data.typeList
        })
    },

    // 选择左侧不同的运动项目
    selectSportType: function (options) {
        let currentTypeSelectedNum = options.target.id
        // 如果点的和现在显示的一样，直接返回
        if (sportTypeSelectedNum == currentTypeSelectedNum) {
            return
        }
        // 否则更新选择的项目
        this.data.sportTypeList[sportTypeSelectedNum].isSelected = false;
        this.data.sportTypeList[currentTypeSelectedNum].isSelected = true;
        sportTypeSelectedNum = currentTypeSelectedNum
        this.setData({
            sportTypeList: this.data.sportTypeList
        })
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