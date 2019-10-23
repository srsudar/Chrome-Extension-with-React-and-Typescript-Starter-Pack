import './contentscript.scss';
import * as msg from './generated/msg_pb';

const protoObj = new msg.Person();
protoObj.setName('tyrion');
protoObj.addNicknames('the imp');

const isThisContentscript = true;
console.log('isThisContentscript', isThisContentscript);
console.log(protoObj);
