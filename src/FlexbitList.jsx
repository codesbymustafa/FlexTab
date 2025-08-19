import useTreeStore from './stores/Treestore';
import useComponentStore from './stores/ComponentStore';

function FlexbitList() {

    const components = useTreeStore((state) => state.tree.all_leaves);
    const componentMap = useComponentStore((state) => state.map);

  return (
    <ul className="list-none p-0 my-4">
            {components.map((component, index) => (
                <li className="py-2 border-b border-gray-700 text-gray-300 cursor-pointer hover:text-white transition-colors duration-200 last:border-b-0" key={index}>
                {componentMap.get(component)}

                </li>
        ))}
    </ul>
  )
}

export default FlexbitList