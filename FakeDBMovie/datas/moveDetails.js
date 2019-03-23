// http://api.douban.com/v2/movie/subject/1295644

// 注意：由于项目使用的是测试的小程序账号，所以 请求的最后需要自己拼接参数

var detail = {
  "rating": {
    "max": 10,
      "average": 9.4,
        "stars": "50",
          "min": 0
  },
  "reviews_count": 4437,
    "wish_count": 155764,
      "douban_site": "",
        "year": "1994",
          "images": {
    "small": "http://img1.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg",
      "large": "http://img1.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg",
        "medium": "http://img1.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg"
  },
  "alt": "https://movie.douban.com/subject/1295644/",
    "id": "1295644",
      "mobile_url": "https://movie.douban.com/subject/1295644/mobile",
        "title": "这个杀手不太冷",
          "do_count": null,
            "share_url": "http://m.douban.com/movie/subject/1295644",
              "seasons_count": null,
                "schedule_url": "",
                  "episodes_count": null,
                    "countries": [
                      "法国"
                    ],
                      "genres": [
                        "剧情",
                        "动作",
                        "犯罪"
                      ],
                        "collect_count": 1817335,
                          "casts": [
                            {
                              "alt": "https://movie.douban.com/celebrity/1025182/",
                              "avatars": {
                                "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8833.jpg",
                                "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8833.jpg",
                                "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8833.jpg"
                              },
                              "name": "让·雷诺",
                              "id": "1025182"
                            },
                            {
                              "alt": "https://movie.douban.com/celebrity/1054454/",
                              "avatars": {
                                "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2274.jpg",
                                "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2274.jpg",
                                "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2274.jpg"
                              },
                              "name": "娜塔莉·波特曼",
                              "id": "1054454"
                            },
                            {
                              "alt": "https://movie.douban.com/celebrity/1010507/",
                              "avatars": {
                                "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33896.jpg",
                                "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33896.jpg",
                                "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33896.jpg"
                              },
                              "name": "加里·奥德曼",
                              "id": "1010507"
                            },
                            {
                              "alt": "https://movie.douban.com/celebrity/1019050/",
                              "avatars": {
                                "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23874.jpg",
                                "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23874.jpg",
                                "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23874.jpg"
                              },
                              "name": "丹尼·爱罗",
                              "id": "1019050"
                            }
                          ],
                            "current_season": null,
                              "original_title": "Léon",
                                "summary": "里昂（让·雷诺饰）是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔达（纳塔丽·波特曼饰)敲开他的房门，要求在他那里暂避杀身之祸。原来邻居家的主人是警方缉毒组的眼线，只因贪污了一小包毒品而遭恶警（加里·奥德曼饰）杀害全家的惩罚。马蒂尔达得到里昂的留救，幸免于难，并留在里昂那里。里昂教小女孩使枪，她教里昂法文，两人关系日趋亲密，相处融洽。 女孩想着去报仇，反倒被抓，里昂及时赶到，将女孩救回。混杂着哀怨情仇的正邪之战渐次升级，更大的冲突在所难免……©豆瓣",
                                  "subtype": "movie",
                                    "directors": [
                                      {
                                        "alt": "https://movie.douban.com/celebrity/1031876/",
                                        "avatars": {
                                          "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33301.jpg",
                                          "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33301.jpg",
                                          "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33301.jpg"
                                        },
                                        "name": "吕克·贝松",
                                        "id": "1031876"
                                      }
                                    ],
                                      "comments_count": 226762,
                                        "ratings_count": 1249265,
                                          "aka": [
                                            "杀手莱昂",
                                            "终极追杀令(台)",
                                            "杀手里昂",
                                            "Leon",
                                            "Leon: The Professional"
                                          ]
}

module.exports = {
  detail: detail
}