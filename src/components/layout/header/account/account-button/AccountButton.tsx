import Identicon from '@polkadot/react-identicon';
import Button from '@mui/material/Button';
import { buttonStyles } from '@gear-js/ui';
import "./style.css";

type Props = {
  address: string;
  name: string | undefined;
  onClick: () => void;
  isActive?: boolean;
  block?: boolean;
};

function AccountButton({ address, name, onClick, isActive, block }: Props) {
  

  return (
    <Button variant="contained" onClick={onClick}>
      <Identicon value={address} className={buttonStyles.icon} theme="polkadot" size={28} />
      {name}
    </Button>
  );
}

export { AccountButton };
