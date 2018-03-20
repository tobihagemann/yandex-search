# Yandex Search Server
[![Twitter](https://img.shields.io/badge/twitter-@tobihagemann-blue.svg?style=flat)](https://twitter.com/tobihagemann)

Simple server for Yandex XML search that responds as JSON, written in Express.

## Install
Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine. `brew install node` is recommended on macOS.

```
npm install
```

## Configuration

The configuration can be changed in `config.json`.

```json
{
  "port": 3000,
  "user": "<user name>",
  "key": "<API key>"
}
```

| Key | Type | Description |
| --- | ---- | ----------- |
| port | number | Port on which the server listens for connections. Default port is 3000. |
| user | string | User name. Must match the login for [Yandex.Passport](https://passport.yandex.com/) that was set during [registration](https://tech.yandex.com/xml/doc/dg/task/registration-docpage/). |
| key | string | Value of the API key that was issued during [registration](https://tech.yandex.com/xml/doc/dg/task/registration-docpage/). |

## Environment Variables

The configuration can also be changed via environment variables. In fact, they have a higher priority than the configuration inside `config.json`.

| Environment Variable | Configuration Key |
| -------------------- | ----------------- |
| PORT | port |
| YANDEX_USER | user |
| YANDEX_KEY | key |

## Start
```
node app.js
```

This app starts a server and listens for connections.

If you don't want to change `config.json`, you can set environment variables instead. You have to set `user` and `key` in order to access Yandex's API.

```
YANDEX_USER=user YANDEX_KEY=key node app.js
```

## API

### Search

```
/search
```

#### Method: GET

```
/search?query=<search query text>
```

| Parameter | Value | Description |
| --------- | ----- | ----------- |
| query | string | Text of the search query. Instead of special symbols, the corresponding escape sequences must be used.<br>The query has the following restrictions: maximum query length — 400 characters; maximum number of words — 40. |

Currently, other parameters aren't supported.

#### Response

The example response below is taken from [here](https://tech.yandex.com/xml/doc/dg/concepts/response-docpage/). The conversion from XML to JSON is done with [`xml-js`](https://github.com/nashwaan/xml-js) using the options `{ compact: true, nativeType: true }`.

<details><summary>Show JSON response example</summary><p>

```json
{
  "_declaration": {
    "_attributes": {
      "encoding": "utf-8",
      "version": "1.0"
    }
  },
  "yandexsearch": {
    "_attributes": {
      "version": "1.0"
    },
    "request": {
      "groupings": {
        "groupby": {
          "_attributes": {
            "attr": "d",
            "curcateg": "-1",
            "docs-in-group": "3",
            "groups-on-page": "10",
            "mode": "deep"
          }
        }
      },
      "maxpassages": {
        "_text": 2
      },
      "page": {
        "_text": 0
      },
      "query": {
        "_text": "yandex"
      },
      "sortby": {
        "_attributes": {
          "order": "descending",
          "priority": "no"
        },
        "_text": "rlv"
      }
    },
    "response": {
      "_attributes": {
        "date": "20120928T103130"
      },
      "error": {
        "_attributes": {
          "code": "15"
        },
        "_text": "Sorry, there are no results for this search"
      },
      "found": [{
          "_attributes": {
            "priority": "phrase"
          },
          "_text": 206775197
        },
        {
          "_attributes": {
            "priority": "strict"
          },
          "_text": 206775197
        },
        {
          "_attributes": {
            "priority": "all"
          },
          "_text": 206775197
        }
      ],
      "found-human": {
        "_text": "207 million pages found"
      },
      "misspell": {
        "rule": {
          "_text": "Misspell"
        },
        "source-text": {
          "_text": "yande",
          "hlword": {
            "_text": "xx"
          }
        },
        "text": {
          "_text": "yandex"
        }
      },
      "reask": {
        "rule": {
          "_text": "Misspell"
        },
        "source-text": {
          "_text": "dex",
          "hlword": {
            "_text": "yn"
          }
        },
        "text": {
          "_text": "yandex"
        },
        "text-to-show": {
          "_text": "yandex"
        }
      },
      "reqid": {
        "_text": "1348828873568466-1289158387737177180255457-3-011-XML"
      },
      "results": {
        "grouping": {
          "_attributes": {
            "attr": "d",
            "curcateg": "-1",
            "docs-in-group": "3",
            "groups-on-page": "10",
            "mode": "deep"
          },
          "found": [{
              "_attributes": {
                "priority": "phrase"
              },
              "_text": 45094
            },
            {
              "_attributes": {
                "priority": "strict"
              },
              "_text": 45094
            },
            {
              "_attributes": {
                "priority": "all"
              },
              "_text": 45094
            }
          ],
          "found-docs": [{
              "_attributes": {
                "priority": "phrase"
              },
              "_text": 192685602
            },
            {
              "_attributes": {
                "priority": "strict"
              },
              "_text": 192685602
            },
            {
              "_attributes": {
                "priority": "all"
              },
              "_text": 192685602
            }
          ],
          "found-docs-human": {
            "_text": "193 million pages found"
          },
          "group": {
            "categ": {
              "_attributes": {
                "attr": "d",
                "name": "UngroupVital223.ru"
              }
            },
            "doc": {
              "_attributes": {
                "id": "ZD831E1113BCFDD95"
              },
              "charset": {
                "_text": "utf-8"
              },
              "domain": {
                "_text": "www.yandex.ru"
              },
              "headline": {
                "_text": "Search the entire internet based on the user's region."
              },
              "mime-type": {
                "_text": "text/html"
              },
              "modtime": {
                "_text": "20060814T040000"
              },
              "passages": {
                "passage": {
                  "_text": " —a search engine...",
                  "hlword": {
                    "_text": "Yandex"
                  }
                }
              },
              "properties": {
                "_PassagesType": {
                  "_text": 0
                },
                "lang": {
                  "_text": "ru"
                }
              },
              "relevance": {
                "_attributes": {
                  "priority": "phrase"
                }
              },
              "saved-copy-url": {
                "_text": "https://hghltd.yandex.net/yandbtm?text=yandex&url=https%3A%2F%2Fwww.yandex.ru%2F&fmode=inject&mime=html&l10n=ru&sign=e3737561fc3d1105967d1ce619dbd3c7&keyno=0"
              },
              "size": {
                "_text": 26938
              },
              "title": {
                "_text": [
                  "\"",
                  "\" search engine and internet portal"
                ],
                "hlword": {
                  "_text": "Yandex"
                }
              },
              "url": {
                "_text": "https://www.yandex.ru/"
              }
            },
            "doccount": {
              "_text": 34
            },
            "relevance": {
              "_attributes": {
                "priority": "all"
              }
            }
          },
          "page": {
            "_attributes": {
              "first": "1",
              "last": "10"
            },
            "_text": 0
          }
        }
      }
    }
  }
}
```

</p></details>

## License
Distributed under the MIT license. See the LICENSE file for more info.
