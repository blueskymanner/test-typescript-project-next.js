// components

export default function Home() {

  return (
    <main
      style={{
        color: 'white'
      }}
    >
      <div
        style={{
          backgroundImage: "url('/assets/img/showcase.png')",
          backgroundSize: 'cover',
          padding: '2.0em',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
        <div
          style={{
            fontFamily: 'Druk Wide Web Bold Regular',
            lineHeight: 1.5
          }}
        >logo <br />here</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
        >
          <img
            src="/assets/img/Group 182@2x.png"
            alt=""
            style={{
              width: '180px'
            }}
          />
          <img
            src="/assets/img/Group 185@2x.png"
            alt=""
            style={{
              width: '30px',
              margin: '1.0em 0'
            }}
          />
        </div>
      </div>
        <div
          style={{
            color: 'white',
            fontFamily: 'Druk Wide Web Bold Regular',
            fontSize: '5.0em',
            margin: '1.0em 0.5em',
            textTransform: 'uppercase'
          }}
        >Built for <br />artists by <br />artists</div>
      </div>
      <div
        style={{
          backgroundColor: '#000',
          width: '100%',
          padding: '2.0em'
        }}
      >
        <div
          style={{
            display: 'flex',
            padding: '2.0em'
          }}
        >
          <div
            style={{
              width: '50%',
              padding: '1.0em',
            }}
          >
            <p
              style={{
                fontFamily: 'Helvetica Neu Bold',
              }}
            >
              We are genuinely here to make a positive impact.
            </p>
          </div>
          <div
            style={{
              width: '50%',
              padding: '1.0em',
            }}
          >
            <p
              style={{
                fontFamily: 'Helvetica Neu Bold',
                color: 'white'
              }}
            >
              t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            padding: '2.0em'
          }}
        >
          <div
            style={{
              width: '50%',
              padding: '1.0em',
            }}
          >
            <h3
              style={{
                fontFamily: 'Druk Wide Web Bold Regular',
              }}
            >
              JOHN SMITH
            </h3>
            <p
              style={{
                fontFamily: 'Helvetica Neu Bold',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div
              style={{
                padding: '1.0em 0'
              }}
            >
              <img
                src="/assets/img/linkedin-svgrepo-com@2x.png"
                alt=""
                style={{
                  width: '1.2em',
                }}
              />
              <img
                src="/assets/img/twitter-svgrepo-com@2x.png"
                alt=""
                style={{
                  width: '1.2em',
                  marginLeft: '1.0em',
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: '50%',
              padding: '1.0em',
            }}
          >
            <h3
              style={{
                fontFamily: 'Druk Wide Web Bold Regular',
              }}
            >
              JOHN SMITH
            </h3>
            <p
              style={{
                fontFamily: 'Helvetica Neu Bold',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div
              style={{
                padding: '1.0em 0'
              }}
            >
              <img
                src="/assets/img/iconmonstr-github-1@2x.png"
                alt=""
                style={{
                  width: '1.2em',
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            padding: '2.0em'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              marginRight: '2.0em'
            }}
          >
            <h4
              style={{
                fontFamily: 'Druk Wide Web Bold Regular',
                textTransform: 'uppercase',
                fontSize: '0.75em',
                margin: '1.0em'
              }}
            >About</h4>
            <h4
              style={{
                fontFamily: 'Druk Wide Web Bold Regular',
                textTransform: 'uppercase',
                fontSize: '0.75em',
                margin: '1.0em'
              }}
            >Hearcrew</h4>
            <h4
              style={{
                fontFamily: 'Druk Wide Web Bold Regular',
                textTransform: 'uppercase',
                fontSize: '0.75em',
                margin: '1.0em'
              }}
            >Creators</h4>
            <div style={{flexGrow: 1}}></div>
            <p
              style={{
                fontFamily: 'Helvetica Neu Bold',
                fontSize: '0.75em',
                margin: '1.0em',
              }}
            >All Rights Reverved</p>
          </div>
          <div
            style={{
              margin: '0 2.0em'
            }}
          >
            <h4
              style={{
                fontFamily: 'Druk Wide Web Bold Regular',
                textTransform: 'uppercase',
                fontSize: '0.75em',
                margin: '1.0em'
              }}
            >Twitter</h4>
            <h4
              style={{
                fontFamily: 'Druk Wide Web Bold Regular',
                textTransform: 'uppercase',
                fontSize: '0.75em',
                margin: '1.0em'
              }}
            >Discode</h4>
          </div>
          <div
            style={{
              margin: '0 2.0em'
            }}
          >
            <h4
              style={{
                fontFamily: 'Druk Wide Web Bold Regular',
                textTransform: 'uppercase',
                fontSize: '0.75em',
                margin: '1.0em'
              }}
            >Terms & Conditions</h4>
            <h4
              style={{
                fontFamily: 'Druk Wide Web Bold Regular',
                textTransform: 'uppercase',
                fontSize: '0.75em',
                margin: '1.0em'
              }}
            >Privacy Policy</h4>
            <p
              style={{
                fontFamily: 'Helvetica Neu Bold',
                fontSize: '0.75em',
                margin: '1.0em',
                marginTop: '10.0em'
              }}
            >Join the mail list</p>
            <div style={{
              border: '1px solid #fff',
              padding: '0.25em 0.5em',
              margin: '1.0em',
              width: '10.0em'
            }}>
              <input type="text"
                style={{
                  backgroundColor: 'transparent',
                  border: '0px solid #fff',
                  outlineWidth: 0,
                  color: '#fff',
                  width: '7.5em'
                }}
              />
              	&nbsp;&#8594;
            </div>
          </div>
          <div
            style={{
              alignSelf: 'center',
              flexGrow: 1,
              margin: '1.0em'
            }}
          >
            <h4
              style={{
                fontFamily: 'Druk Wide Web Bold Regular',
                fontSize: '1.0em',
                textAlign: 'center',
              }}
            >logo <br />here</h4>
          </div>
        </div>
      </div>
    </main>
  )
}
