import styles from './index.less';
import { Button } from 'antd';
import { useHistory } from 'umi';

export default function IndexPage() {
  const history = useHistory();
  return (
    <div>
      <Button className={styles.title} type='primary' onClick={()=>history.go(-1)}>Page index</Button>
    </div>
  );
}
