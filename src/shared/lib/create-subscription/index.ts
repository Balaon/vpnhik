interface CreateSubscribptionResult<Subscriber extends (...arg: any[]) => any> {
  notify: (...args: Parameters<Subscriber>) => void;
  subscribe: (newSubscribe: Subscriber) => () => void;
}

export const createSubscribption = <
  Subscriber extends (...arg: any[]) => any,
>(): CreateSubscribptionResult<Subscriber> => {
  let subscribers: Subscriber[] = [];

  const subscribe = (newSubscriber: Subscriber) => {
    subscribers.push(newSubscriber);

    return () => {
      subscribers = subscribers.filter((subscriber) => subscriber !== newSubscriber);
    };
  };

  const notify = (...args: Parameters<Subscriber>) => {
    for (const subscriber of subscribers) subscriber(...args);
  };

  return {
    notify,
    subscribe,
  };
};
