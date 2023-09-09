import Button from '../../components/commons/Button'

const Header = () => {
  return (
    <div className="w-full grid grid-cols-12 p-1 border-2 border-orange-400 rounded-full gap-2">
      <div className="col-span-4">
        <Button caption="Books Museum" type="active"/>
      </div>
      <div className="col-span-4">
        <Button caption="Todo"/>
      </div>
      <div className="col-start-11 col-span-2">
        <Button caption="Add new Todo" type="static"/>
      </div>
    </div>
  );
};

export default Header;
  