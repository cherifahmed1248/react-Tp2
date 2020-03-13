import React from "react";
import "./create_statut.css";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import {
  Comment,
  Tooltip,
  PageHeader,
  Avatar,
  Divider,
  Menu,
  Dropdown,
  Input,
  Button
} from "antd";
import {
  SmileOutlined,
  CameraOutlined,
  CommentOutlined,
  LikeOutlined,
  LikeFilled,
  ShareAltOutlined,
  CheckOutlined,
  DownOutlined,
  UserAddOutlined,
  DeleteTwoTone,
  CalendarTwoTone,
  FileTextTwoTone,
  PictureTwoTone,
  TagTwoTone,
  EditTwoTone,
  CameraTwoTone,
  VideoCameraTwoTone,
  EllipsisOutlined,
  FileAddTwoTone
} from "@ant-design/icons";
function Create_statut() {
  const menu1 = (
    <Menu>
      <Menu.Item key="1">
        <FileAddTwoTone /> Fichier
      </Menu.Item>
      <Menu.Item key="2">
        <TagTwoTone /> Vendre un article
      </Menu.Item>
      <Menu.Item key="3">
        <PictureTwoTone /> Album photo
      </Menu.Item>
      <Menu.Item key="3">
        <FileTextTwoTone /> Créer un document
      </Menu.Item>
      <Menu.Item key="3">
        <CalendarTwoTone /> Evènement
      </Menu.Item>
    </Menu>
  );
  const menu = (
    <Menu>
      <Menu.Item key="1">Se désabonner du groupe</Menu.Item>
      <Menu.Item key="2">Quitter le groupe</Menu.Item>
    </Menu>
  );
  const menu2 = (
    <Menu>
      <Menu.Item key="1">Inviter des membres</Menu.Item>
      <Menu.Item key="2">Gérer des memebres</Menu.Item>
      <Menu.Item key="3">Epingler aux racourcis</Menu.Item>
    </Menu>
  );
  const menu3 = (
    <Menu>
      <Menu.Item>
        <CheckOutlined />
        Toutes les publications
      </Menu.Item>
      <Menu.Item>En bref</Menu.Item>
      <Menu.Item>Publication de vos amis</Menu.Item>
    </Menu>
  );

  const { likes, action } = {
    likes: 10,
    action: null
  };

  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        {React.createElement(
          action === "liked" ? LikeFilled : LikeOutlined,
          {}
        )}
      </Tooltip>
      <span className="comment-action">{likes}</span>
    </span>,
    <span>Vu par 22 personnes</span>
  ];
  return (
    <div className="statut">
      <PageHeader className="site-page-header-responsive">
        <div className="head">
          <img
            alt="background"
            class="img"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Ls6GKw3fOr6.png"
          />
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button key="1">
              Membre <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menu3} trigger={["click"]}>
            <Button icon={<CheckOutlined />}>Notification</Button>
          </Dropdown>
          &nbsp;&nbsp;
          <Button icon={<ShareAltOutlined />}>Partage</Button>
          <Dropdown overlay={menu2} trigger={["click"]}>
            <Button>
              <EllipsisOutlined /> Plus
            </Button>
          </Dropdown>
        </div>
      </PageHeader>
      <div className="pubparent">
        <br></br>
        <div className="pub">
          <div>
            <a href="#">
              <EditTwoTone />
              Message
            </a>
            <Divider type="vertical" />
            <a href="#">
              <CameraTwoTone />
              Photo/Vidéo
            </a>
            <Divider type="vertical" />
            <a href="#">
              <VideoCameraTwoTone />
              Vidéo en direct
            </a>
            <Divider type="vertical" />
            <Dropdown overlay={menu1}>
              <a
                className="ant-dropdown-link"
                onClick={e => e.preventDefault()}
              >
                <EllipsisOutlined />
                Plus
              </a>
            </Dropdown>
          </div>
          <div>
            <Input
              size="large"
              placeholder="Exprimez-vous"
              prefix={<Avatar size="large" icon={<UserOutlined />} />}
            />
            <br />
            <Button
              style={{ background: "#f5f6f7" }}
              shape="round"
              icon={<PictureTwoTone />}
              size={"small"}
            >
              Photo/Vidéo
            </Button>
            <Button
              style={{ background: "#f5f6f7" }}
              shape="round"
              icon={<DeleteTwoTone />}
              size={"small"}
            >
              Séance vidéo
            </Button>
            <Button
              style={{ background: "#f5f6f7" }}
              shape="round"
              icon={<UserAddOutlined />}
              size={"small"}
            >
              Identifier des amis
            </Button>
            <Button
              style={{ background: "#f5f6f7" }}
              shape="round"
              icon={<EllipsisOutlined />}
              size={"small"}
            ></Button>
          </div>
        </div>
        <div className="mur">
          <Comment
            actions={actions}
            author={
              <div>
                <a>
                  <h2>Han Solo</h2>
                </a>
                <h4>
                  Membre fondateur <span>9 mars, 22:20</span>
                </h4>
              </div>
            }
            avatar={<Avatar size={38} icon={<UserOutlined />} />}
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
          />
          <div className="btns">
            <Button
              style={{ width: "50%" }}
              shape="omitted"
              icon={<LikeOutlined />}
              size={"large"}
            >
              J'aime
            </Button>
            <Button
              style={{ width: "50%" }}
              shape="omitted"
              icon={<CommentOutlined />}
              size={"large"}
            >
              Commenter
            </Button>
          </div>
          <div className="comment">
            <Avatar
              className="avatarx"
              size={"medium"}
              icon={<UserOutlined />}
            />
            <Input
              size="medium"
              placeholder="Votre commentaire"
              suffix={
                <div>
                  <SmileOutlined /> <CameraOutlined />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Create_statut;
