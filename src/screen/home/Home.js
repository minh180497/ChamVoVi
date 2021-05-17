import React, {useEffect, useState, useCallback} from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    Image,
    Alert,
    TouchableOpacity
} from "react-native";
import Header from "../../components/Header";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const DATA = [
    {
        "kind": "youtube#searchResult",
        "etag": "u3aTm3xSZP6LTAs1oyQX2095wqE",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLfFytGjP6OYSbEaWvv-hlWeapMOZd1VHQ"
        },
        "snippet": {
            "publishedAt": "2021-04-28T13:34:25Z",
            "channelId": "UCa4fqWu19ey3ThBkHJJDgZw",
            "title": "Tác giả Bùi Ngọc Việt",
            "description": "Danh mục chia sẻ các bài viết từ tác giả bùi ngọc việt qua giọng đọc của Chạm Vô Vi.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/p85FXWwfIP8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/p85FXWwfIP8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/p85FXWwfIP8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chạm Vô Vi Radio",
            "liveBroadcastContent": "none",
            "publishTime": "2021-04-28T13:34:25Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "rjn0lvfs4JKEHMm5yrG3cP1rx_c",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLfFytGjP6OYTGFEialmlfIozG05qmQeeW"
        },
        "snippet": {
            "publishedAt": "2020-04-24T05:25:30Z",
            "channelId": "UCa4fqWu19ey3ThBkHJJDgZw",
            "title": "\bPodcast 2021",
            "description": "Tổng hợp các video được làm năm 2021.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/l6qSEMkQOMw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/l6qSEMkQOMw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/l6qSEMkQOMw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chạm Vô Vi Radio",
            "liveBroadcastContent": "none",
            "publishTime": "2020-04-24T05:25:30Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "o8lQ9lMMpVbuwvBb5oHUPJxPOBg",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLfFytGjP6OYSwVJIBnwHAWfMdhvXnhJwi"
        },
        "snippet": {
            "publishedAt": "2020-04-24T05:26:22Z",
            "channelId": "UCa4fqWu19ey3ThBkHJJDgZw",
            "title": "Chạm Vô Vi Podcast(All)",
            "description": "Tất cả các video dạng radio của kênh Chạm Vô Vi.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/VitLNUT2GXc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/VitLNUT2GXc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/VitLNUT2GXc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chạm Vô Vi Radio",
            "liveBroadcastContent": "none",
            "publishTime": "2020-04-24T05:26:22Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "UvisBoNB4bfP5hZ_PnedBCYEapM",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLfFytGjP6OYQAzQsbANlQjldrg9lPEhvV"
        },
        "snippet": {
            "publishedAt": "2021-05-04T00:17:47Z",
            "channelId": "UCa4fqWu19ey3ThBkHJJDgZw",
            "title": "Vén Mây Lòng - Đọc Thông Điệp Làng Mai",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/zF2UJBGeru0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/zF2UJBGeru0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/zF2UJBGeru0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chạm Vô Vi Radio",
            "liveBroadcastContent": "none",
            "publishTime": "2021-05-04T00:17:47Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "tr4ikaMy5g9E8xVROs5f5ZVoLxY",
        "id": {
            "kind": "youtube#channel",
            "channelId": "UCa4fqWu19ey3ThBkHJJDgZw"
        },
        "snippet": {
            "publishedAt": "2013-02-23T08:58:27Z",
            "channelId": "UCa4fqWu19ey3ThBkHJJDgZw",
            "title": "Chạm Vô Vi Radio",
            "description": "CHẠM VÔ VI RADIO Với chủ đề “Ý NGHĨA CUỘC SỐNG” kênh Chạm Vô Vi đem đến cho người xem những vừa giải trí, vừa học hỏi với những điều ý nghĩa và ...",
            "thumbnails": {
                "default": {
                    "url": "https://yt3.ggpht.com/ytc/AAUvwnhSTJFSbuPyh4c0p-tdJHPqdPg9pHduhhLf5I7RIg=s88-c-k-c0xffffffff-no-rj-mo"
                },
                "medium": {
                    "url": "https://yt3.ggpht.com/ytc/AAUvwnhSTJFSbuPyh4c0p-tdJHPqdPg9pHduhhLf5I7RIg=s240-c-k-c0xffffffff-no-rj-mo"
                },
                "high": {
                    "url": "https://yt3.ggpht.com/ytc/AAUvwnhSTJFSbuPyh4c0p-tdJHPqdPg9pHduhhLf5I7RIg=s800-c-k-c0xffffffff-no-rj-mo"
                }
            },
            "channelTitle": "Chạm Vô Vi Radio",
            "liveBroadcastContent": "upcoming",
            "publishTime": "2013-02-23T08:58:27Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "QmaLvQB9yL4TOa8Mk51wSDDBWio",
        "id": {
            "kind": "youtube#video",
            "videoId": "0ytaSSyK8Qs"
        },
        "snippet": {
            "publishedAt": "2020-04-27T09:16:43Z",
            "channelId": "UCa4fqWu19ey3ThBkHJJDgZw",
            "title": "BLOG RADIO | KHÓ KHĂN TRONG CUỘC SỐNG ? | KỲ SỐ 9",
            "description": "CHỦ ĐỀ: KHÓ KHĂN TRONG CUỘC SỐNG? Mọi dòng sông đều uốn khúc, chỉ có những con kênh đào nhân tạo mới thẳng tấp một đường. Tạo hóa chế tác ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/0ytaSSyK8Qs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/0ytaSSyK8Qs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/0ytaSSyK8Qs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chạm Vô Vi Radio",
            "liveBroadcastContent": "none",
            "publishTime": "2020-04-27T09:16:43Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Dca0RGfi6CDtpuAb_gPtPfN7UW8",
        "id": {
            "kind": "youtube#video",
            "videoId": "U-7ocDyYuoM"
        },
        "snippet": {
            "publishedAt": "2020-04-04T16:07:09Z",
            "channelId": "UCa4fqWu19ey3ThBkHJJDgZw",
            "title": "ANH CÒN NỢ EM | ANH BẰNG | COVER BỞI ĐẶNG QUỐC CƯỜNG",
            "description": "Năm 30 tuổi làm một điều không tưởng đó là vào phong thu, ghi âm bài hát lần đầu tiên trong đời. Song: Anh Còn Nợ Em Composer: Anh Bằng Trình bày: Đặng ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/U-7ocDyYuoM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/U-7ocDyYuoM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/U-7ocDyYuoM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chạm Vô Vi Radio",
            "liveBroadcastContent": "none",
            "publishTime": "2020-04-04T16:07:09Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Gt8xeTE33c_b6xbDaFIbmeDy07c",
        "id": {
            "kind": "youtube#video",
            "videoId": "UX-X0L7GRDg"
        },
        "snippet": {
            "publishedAt": "2020-04-04T11:50:58Z",
            "channelId": "UCa4fqWu19ey3ThBkHJJDgZw",
            "title": "BLOG RADIO | DUNG LƯỢNG TRÁI TIM | SỐ 1 - 04.04.2020",
            "description": "DUNG LƯỢNG TRÁI TIM “Nắm muối không hề mặn với lượng cả dòng sông Lỗi lầm kia bé nhỏ với cõi lòng mênh mông” – Thầy Minh Niệm Dung lượng trái tim ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/UX-X0L7GRDg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/UX-X0L7GRDg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/UX-X0L7GRDg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chạm Vô Vi Radio",
            "liveBroadcastContent": "none",
            "publishTime": "2020-04-04T11:50:58Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "L6oOhBQzyesryUFXJxgXLe4kn-M",
        "id": {
            "kind": "youtube#video",
            "videoId": "KSxfT27kFQU"
        },
        "snippet": {
            "publishedAt": "2020-04-07T12:01:33Z",
            "channelId": "UCa4fqWu19ey3ThBkHJJDgZw",
            "title": "Blog Radio | Tiền Là Phương Tiện Hay Là Đích | Số 4 - 07.4.2020",
            "description": "TIỀN LÀ PHƯƠNG TIỆN HAY LÀ ĐÍCH? “Tiền là phương tiện của người thông minh và là mục đích của kẻ ngu dốt” Tiền là đích hay phương tiện trong cuộc ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/KSxfT27kFQU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/KSxfT27kFQU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/KSxfT27kFQU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chạm Vô Vi Radio",
            "liveBroadcastContent": "none",
            "publishTime": "2020-04-07T12:01:33Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "SyXf2ko3JUMdJrNuF7J81xgUzhY",
        "id": {
            "kind": "youtube#video",
            "videoId": "6_oJS9egV6I"
        },
        "snippet": {
            "publishedAt": "2020-05-05T23:30:01Z",
            "channelId": "UCa4fqWu19ey3ThBkHJJDgZw",
            "title": "Blog Radio | Đoạn Tuyệt Khổ Bằng Thuốc Giảm Đau?",
            "description": "CHẠM VÔ VI RADIO là một kênh Youtube do một bạn trẻ sống ở đất Tây Đô thành lập. Dự án cá nhân để chia sẻ những câu chuyện tự viết bằng giọng đọc ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/6_oJS9egV6I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/6_oJS9egV6I/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/6_oJS9egV6I/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chạm Vô Vi Radio",
            "liveBroadcastContent": "none",
            "publishTime": "2020-05-05T23:30:01Z"
        }
    }
];

function Item({title, imageUrl, channelImg, navigation, idVideo, channelTitle}) {
    return (
        <View style={styles.item}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Detail', {
                    idVideo: idVideo,
                    titleVideo: title
                })}
            >
            <Image source={{uri: imageUrl}} style={{height: 200}}/>
            </TouchableOpacity>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail', {
                            idVideo: idVideo
                        })}
                    >
                    <Image
                        source={{uri: channelImg}}
                        style={{height: 30, width: 30, borderRadius: 30, margin: 10}}
                    />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text
                            style={{
                                paddingLeft: 6,
                                paddingTop: 4,
                                color: "gray"
                            }}
                        >
                            Chạm Vô Vi Radio . {parseInt(Math.random() * 1000)}K Views
                        </Text>
                        <Text
                            style={{
                                paddingLeft: 6,
                                color: "gray"
                            }}
                        >
                            {parseInt(Math.random() * 10)} months ago
                        </Text>
                    </View>
                </View>
                <Icon
                    name="dots-vertical"
                    size={20}
                    color="gray"
                    style={{paddingTop: 10}}
                />
            </View>
        </View>
    );
}

export default function Home({navigation}) {
    const [dataSource, setDataSource] = useState([])
    const fetchData = () => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=AIzaSyCVqO9p4BY3REs1Seeg3t1L1OXGqL7GJ5Y`)
            .then(res => res.json())
            .then(data => {
                //setDataSource(data)
                console.log('data', data)
            })
    }
    useEffect(() => {
        fetchData();
    },);

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <FlatList
                data={DATA}
                renderItem={({item}) => (
                    <Item
                        title={item.snippet.title}
                        imageUrl={item.snippet.thumbnails.high.url}
                        channelImg={item.snippet.thumbnails.default.url}
                        channelTitle={item.channelTitle}
                        idVideo={item.id.videoId}
                        navigation={navigation}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    item: {
        height: 300,
        borderStyle: "solid",
        borderBottomColor: "gray"
    },
    title: {
        fontSize: 12,
        paddingLeft: 6,
        paddingTop: 10,
        shadowOpacity: 0
    }
});


