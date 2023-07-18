import { useState } from 'react'
import OrderDropDown from "../components/DropDown/OrderDropDown.tsx";
import {Form, Grid, Header, Input, Segment} from "semantic-ui-react";

function Order() {

  const [scrapeCount, setScrapeCount] = useState<string>("")

  const [productType, setProductType] = useState<string>("")

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectOption, setSelectOption] = useState<string>("");
    const cities = () => {
      return ["All", "OnDiscount", "NonDiscount"];
    };
  
    /**
     * Toggle the drop down menu
     */
    const toggleDropDown = () => {
      setShowDropDown(!showDropDown);
    };
  
    /**
     * Hide the drop down menu if click occurs
     * outside of the drop-down element.
     *
     * @param event  The mouse event
     */
    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
      if (event.currentTarget === event.target) {
        setShowDropDown(false);
      }
    };
  
    /**
     * Callback function to consume the
     * city name from the child component
     *
     * @param city  The selected city
     */
    const optionSelection = (option: string): void => {
      setSelectOption(option);
    };


  const gonderdim = () => {
    console.log(scrapeCount);
  };

  const handleScrapeCount = (value:string) => {
    setScrapeCount(String(value));
  };

  const handleProductType = (value:string) => {
    setProductType(String(value));
  };

  return (
    <>
                <Header as='h2' textAlign='center' color='green' style={{ fontSize: '36px', fontWeight: 'bold' }}>Welcome to UPSTORAGE</Header>
                <Segment raised style={{backgroundColor: '#A2BEB9', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', transition: '0.3s', color: '#173A3A'}}>

                    <Grid >
                            <Grid.Column>
                                <Form>
                                    <Form.Field>
                                        <label>How many items to scrape?</label>
                                        <Input
                                            id="scrapeCountSelector"
                                            value={scrapeCount}
                                            onChange={(_, data) => handleScrapeCount(data.value)}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>What products do you want to scraping?</label>
                                        <Input
                                            id="productTypeSelector"
                                            value={productType}
                                            onChange={(_, data) => handleProductType(data.value)}
                                        />
                                        <div className="announcement">
                                        <div>
                                          {selectOption
                                            ? `You selected ${selectOption}`
                                            : "Select"}
                                        </div>
                                      </div>
                                      <button
                                        className={showDropDown ? "active" : undefined}
                                        onClick={(): void => toggleDropDown()}
                                        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
                                          dismissHandler(e)
                                        }
                                      >
                                        <div>{selectOption ? "Select: " + selectOption : "Select ..."} </div>
                                        {showDropDown && (
                                          <OrderDropDown
                                            options={cities()}
                                            showDropDown={false}
                                            toggleDropDown={(): void => toggleDropDown()}
                                            optionSelection={optionSelection}
                                          />
                                        )}
                                      </button>
                                    </Form.Field>

                                  <br />
                                  <button>Gönder</button>
                                  </Form>
                              </Grid.Column>
                      </Grid>
                  </Segment>
    
    </>
  );

}

export default Order
