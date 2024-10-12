import RuleArguments from './RuleArguments';

interface Message {
  (field: string, args?: RuleArguments): string | Record<string, string>;
}

export default Message;
