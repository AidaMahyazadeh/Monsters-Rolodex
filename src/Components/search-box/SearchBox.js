import './SearchBox.css';
function SearchBox({className,placeholder,onChangeHandler}){
return(
  <input
  className='search-box'
  type='search'
  placeholder='search monsters'
  onChange={onChangeHandler}
/>
)

}
export default SearchBox;