import { ITags, IMultiSelect } from '../../types';

export const Tags = ( props:ITags ): JSX.Element[] | null => {
  const { multi_select } = props;
  if (!multi_select) {
    return null
  }
  return multi_select.map((item:IMultiSelect) => {
    const { id, name,color } = item;
    return (
      <span key={id} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 ml-1">
        {name}
      </span>
    );
  });
};

