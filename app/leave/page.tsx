'use client'

import { generate } from '@pdfme/generator';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { text, image, barcodes } from "@pdfme/schemas";
import basePdf from './base-pdf';

export default function Leave() {
  const template = {
    "schemas": [
      {
        "id": {
          "type": "text",
          "position": {
            "x": 26.12,
            "y": 67.36
          },
          "width": 20.62,
          "height": 8.37,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "rank": {
          "type": "text",
          "position": {
            "x": 48.82,
            "y": 67.58
          },
          "width": 20.62,
          "height": 8.64,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "surname": {
          "type": "text",
          "position": {
            "x": 70.46,
            "y": 68.06
          },
          "width": 39.67,
          "height": 8.11,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "firstName": {
          "type": "text",
          "position": {
            "x": 110.89,
            "y": 68
          },
          "width": 41.26,
          "height": 7.85,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "appointment": {
          "type": "text",
          "position": {
            "x": 153.43,
            "y": 67.95
          },
          "width": 30.68,
          "height": 7.85,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "activity": {
          "type": "text",
          "position": {
            "x": 26.49,
            "y": 82.29
          },
          "width": 156.61,
          "height": 8.11,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "startTime": {
          "type": "text",
          "position": {
            "x": 26.43,
            "y": 113.46
          },
          "width": 38.34,
          "height": 6.78,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "startDate": {
          "type": "text",
          "position": {
            "x": 65.53,
            "y": 113.13
          },
          "width": 38.87,
          "height": 7.32,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "endTime": {
          "type": "text",
          "position": {
            "x": 105.75,
            "y": 112.87
          },
          "width": 38.87,
          "height": 7.32,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "endDate": {
          "type": "text",
          "position": {
            "x": 145.38,
            "y": 113.08
          },
          "width": 38.87,
          "height": 7.32,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "reason": {
          "type": "text",
          "position": {
            "x": 26.85,
            "y": 133.99
          },
          "width": 156.61,
          "height": 15.79,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "duties": {
          "type": "text",
          "position": {
            "x": 26.8,
            "y": 155.37
          },
          "width": 156.61,
          "height": 6.53,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "signature": {
          "type": "text",
          "position": {
            "x": 26.75,
            "y": 168.28
          },
          "width": 77.23,
          "height": 9.18,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        },
        "date": {
          "type": "text",
          "position": {
            "x": 106.07,
            "y": 168.23
          },
          "width": 77.23,
          "height": 9.18,
          "fontSize": 11,
          "fontColor": "#000000",
          "fontName": "Roboto"
        }
      }
    ],
    basePdf: basePdf
  };
  const plugins = { text, image, qrcode: barcodes.qrcode };

  const [fields, setFields] = useState({
    id: "",
    rank: "",
    surname: "",
    firstName: "",
    appointment: "",
    activity: "",
    startTime: "",
    startDate: "",
    endTime: "",
    endDate: "",
    reason: "",
    duties: "",
    signature: "",
    date: ""
  });

  function dateLocaleStringToIaconisFormat(dateLocaleString: string): { time: string, date: string } {
    const regex = /(\d+)-(\d+)-(\d+)T(\d+):(\d+)/
    console.log(dateLocaleString.match(regex))
    const result = dateLocaleString.match(regex)?.slice(1)!
    return {
      time: `${result[3]}${result[4]}`,
      date: `${result[2]}.${result[1]}.${result[0].slice(2)}`
    }
  }

  const [dateTimeValue, setDateTimeValue] = useState("");
  const [endDateTimeValue, setEndDateTimeValue] = useState("");

  const handleInputChange = (e: { target: { type?: any; name?: any; value?: any; }; }) => {
    const { name, value } = e.target;
    let formattedValue = '';

    if (e.target.type === 'datetime-local') {
      const { date, time } = dateLocaleStringToIaconisFormat(value)
      if (name === 'start') {
        setFields(prevFields => ({
          ...prevFields,
          startTime: time,
          startDate: date
        }));
        setDateTimeValue(value)
      }
      else {
        setFields(prevFields => ({
          ...prevFields,
          endTime: time,
          endDate: date
        }));

        setEndDateTimeValue(value)
      }
    } else {
      formattedValue = value;
      setFields(prevFields => ({
        ...prevFields,
        [name]: formattedValue
      }));
    }
  };

  function getCurrentDateTimeLocal(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  const generateLeave = async () => {
    const profileData = localStorage.getItem("profile")
    const profile = JSON.parse(profileData ?? "")
    if (profile) {
      fields.id = profile.id
      fields.surname = profile.surname
      fields.firstName = profile.firstName
      fields.rank = profile.rank
      fields.appointment = profile.appointment
      fields.signature = profile.signature
    }
    const iaconisFormatDateTime = dateLocaleStringToIaconisFormat(getCurrentDateTimeLocal())
    const currentDateString: string = iaconisFormatDateTime.date
    fields.date = currentDateString
    try {
      const pdf = await generate({ template, inputs: [fields] });
      const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
      const fileName = fields.firstName + fields.surname + ' - Leave Form ' + fields.activity + ' ' + fields.startDate + '.pdf';

      if (typeof window !== 'undefined') {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;

        link.click();

        URL.revokeObjectURL(link.href);
      } else {
        console.error("Window is undefined, could not download your leave.");
      }
    } catch (error) {
      console.error("Error generating leave.", error);
    }
  };

  return (
    <div className="prose dark:prose-invert">
      <div className="flex flex-col pt-6">
        <h1>Leave Application</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="text-lg">Activity</div>
            <input
              className="rounded-lg p-3 prose dark:prose-invert"
              type="text"
              placeholder="Activity name"
              name="activity"
              value={fields.activity}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg">Start</div>
            <input
              className="rounded-lg p-3"
              type="datetime-local"
              name="start"
              value={dateTimeValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg">End</div>
            <input
              className="rounded-lg p-3"
              type="datetime-local"
              name="end"
              value={endDateTimeValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg">Reason</div>
            <textarea
              className="rounded-lg p-3"
              rows={2}
              placeholder="Reason for leave"
              name="reason"
              value={fields.reason}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg">Duty fulfilment arrangements</div>
            <textarea
              className="rounded-lg p-3"
              rows={2}
              placeholder="Description of reassigned duties and arrangements"
              name="duties"
              value={fields.duties}
              onChange={handleInputChange}
            />
          </div>
          <button
            onClick={() => { generateLeave() }}
            className="rounded-lg mt-3 bg-black text-white dark:bg-white dark:text-black p-3"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}
