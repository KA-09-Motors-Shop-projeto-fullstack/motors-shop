import React from "react";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";

const Profile: React.FC = () => {
  return (
    <section>
      <Avatar
        fontSize={20}
        height={40}
        width={40}
        color="random1"
        name="Omar Colombari"
      />
      <div>
        <span>Samuel Leão</span>
        <Button typeButton="brandOpacity" typeFont="medium">
          Anunciante
        </Button>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <Button typeButton="outlineBrand1" typeFont="big">
        Criar anúncio
      </Button>
    </section>
  );
};

export default Profile;
