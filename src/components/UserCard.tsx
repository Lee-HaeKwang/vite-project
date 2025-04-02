import { Card, CardContent, Typography } from "@mui/material";
import { useUserStore } from "../store/useUserStore";

const UserCard = () => {
  const { userId, userName } = useUserStore();

  return (
    <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h6">유저 정보</Typography>
        <Typography>ID: {userId}</Typography>
        <Typography>Name: {userName}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
