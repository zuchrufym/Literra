import {
    faBookOpen,
    faEye,
    faUserGraduate,
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import React from 'react'
  import { Button } from 'reactstrap'
  import TableComponent from '../components/TableComponent'
  
  function Dashboard() {
    let students = [
      {
        id: 1,
        name: 'septian iw',
        address: 'Jakarta',
        username: 'septian',
        password: 'septian',
      },
      {
        id: 2,
        name: 'putri',
        address: 'Bandung',
        username: 'putri',
        password: 'putri',
      },
      {
        id: 3,
        name: 'odi',
        address: 'Jakarta',
        username: 'odi',
        password: 'odi',
      },
      {
        id: 4,
        name: 'emon',
        address: 'Bandung',
        username: 'emon',
        password: 'emon',
      },
      {
        id: 5,
        name: 'ijong',
        address: 'Bandung',
        username: 'ijong',
        password: 'ijong',
      },
      {
        id: 6,
        name: 'tasya',
        address: 'Bandung',
        username: 'tasya',
        password: 'tasya',
      },
      {
        id: 7,
        name: 'jordi',
        address: 'Kalimantan',
        username: 'jordi',
        password: 'jordi',
      },
      {
        id: 8,
        name: 'mike',
        address: 'Bandung',
        username: 'mike',
        password: 'mike',
      },
      {
        id: 9,
        name: 'ruby',
        address: 'Bandung',
        username: 'ruby',
        password: 'ruby',
      },
      {
        id: 10,
        name: 'hanif',
        address: 'Bekasi',
        username: 'hanif',
        password: 'hanif',
      },
      {
        id: 11,
        name: 'nilam',
        address: 'Bandung',
        username: 'nilam',
        password: 'nilam',
      },
      {
        id: 12,
        name: 'teddy',
        address: 'Bandung',
        username: 'teddy',
        password: 'teddy',
      },
      {
        id: 13,
        name: 'yeriko',
        address: 'Bandung',
        username: 'yeriko',
        password: 'yeriko',
      },
      {
        id: 14,
        name: 'gio',
        address: 'Bandung',
        username: 'gio',
        password: 'gio',
      },
    ]
  
    return (
      <div className="cTraYs">
        <div className="LftYwr">
          <div className="cRDmY px-4 pt-3">
            <h3 className="color-primary font-weight-bold">Quick Action</h3>
            <div className="d-flex justify-content-between pt-2">
              <Button className="bg-primary rounded-pill">
                <div className="BttRay d-flex justify-content-center">
                  <div className="align-self-center font-big text-secondary">
                    <FontAwesomeIcon
                      className="mr-3"
                      icon={faBookOpen}
                      size="lg"
                    />
                    Add New Exam
                  </div>
                </div>
              </Button>
              <Button className="bg-primary rounded-pill">
                <div className="BttRay d-flex justify-content-center">
                  <div className="align-self-center  font-big text-secondary">
                    <FontAwesomeIcon
                      className="mr-3"
                      icon={faUserGraduate}
                      size="lg"
                    />
                    Add New Customer
                  </div>
                </div>
              </Button>
              <Button className="bg-primary rounded-pill">
                <div className="BttRay d-flex justify-content-center">
                  <div className="align-self-center font-big text-secondary">
                    <FontAwesomeIcon className="mr-3" icon={faEye} size="lg" />
                    Proctoring Window
                  </div>
                </div>
              </Button>
            </div>
          </div>
          <div className="cRDmY">
            <TableComponent students={students} />
          </div>
        </div>
        <div className="cRDmY">
          <div className="outer-container ">
            <div className="inner-element">
              <h2 className="font-weight-bold">Exams</h2>
              <div className="font-bigger">0</div>
            </div>
            <div className="inner-element">
              <h2 className="font-weight-bold">Questions</h2>
              <div className="font-bigger">0</div>
            </div>
            <div className="inner-element">
              <h2 className="font-weight-bold">Students</h2>
              <div className="font-bigger">0</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Dashboard