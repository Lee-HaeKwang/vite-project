import { Card, CardContent, Typography } from "@mui/material";

const UserCard = () => {
  return (
    <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h6">유저 정보</Typography>
        <Typography>ID: tester ID</Typography>
        <Typography>Name: testser NAME</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
