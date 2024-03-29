import { LocaleProvider } from 'antd';
import withRouter from 'umi/withRouter';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import ErrorHandler from '../components/ErrorHandler';

function BasicLayout(props) {
  return <LocaleProvider locale={zh_CN}>{props.children}</LocaleProvider>;
}
export default withRouter(ErrorHandler(BasicLayout));
