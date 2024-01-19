import { Button, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useToggle } from "usehooks-ts";
import { Primitive } from "../../interfaces";
import { CustomModal } from "../custom-modal/CustomModal";
import { LoadingBox } from "../loading-box";

export interface DetailsViewProps {
  data: { name: string; value: Primitive }[];
  onClick?: Function;
  isLoading?: boolean;
}

export const DetailView: FC<DetailsViewProps> = ({
  data,
  onClick,
  isLoading,
}) => {
  const [open, toggle] = useToggle();
  const handleClick = () => {
    toggle();
    onClick && onClick();
  };
  return (
    <>
      <CustomModal open={open} onClose={toggle}>
        <LoadingBox status={isLoading ? "loading" : "data"}>
          <Stack
            spacing={1}
            divider={<Divider orientation="horizontal" flexItem />}
          >
            {data.map(({ name, value }, i) => (
              <Stack key={i} spacing={0.5}>
                <Typography>{name}</Typography>
                <Typography color="text.primary">{value}</Typography>
              </Stack>
            ))}
          </Stack>
        </LoadingBox>
      </CustomModal>
      <Button onClick={handleClick}>{"view"}</Button>
    </>
  );
};
