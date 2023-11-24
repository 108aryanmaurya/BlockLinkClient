export default function Share(props) {
  // const share = props;
  // console.log(props);
  return (
    <>
      <div className="group ">
        <li
          className={`list-none max-sm:py-0  max-sm:px-0  w-[4rem] 
          max-sm:w-[60px] max-sm:rounded-md border-2  border-transparent dark:border-darkBorderAll dark:group-hover:border-secondary  group-hover:border-primaryMain rounded-xl bg-bgBlue dark:bg-darkBgPrimary ${
            props.check == false
              ? "px-1 max-sm:py-0 max-sm:px-0"
              : "px-2 max-sm:py-0 max-sm:px-0"
          } `}
        >
          <a
            className={`block ${
              props.check == false
                ? "mx-0 max-sm:my-0 max-sm:mx-0 my-1 text-2xl"
                : "mx-1 max-sm:my-0 max-sm:mx-0 my-3 text-2xl"
            } relative   text-gray-600 text-center no-underline dark:text-darkTextMain group-hover:text-primaryMain dark:group-hover:text-secondary`}
            href="#"
          >
            <i
              className={` max-sm:text-[19px] fa  fa-${props.share.name} `}
            ></i>
          </a>
        </li>
      </div>
    </>
  );
}
