# biasUncoverer

## To show a Demo

Clone the repository

```cd front```

```yarn install```

```npm run dev```

It should run in http://localhost:3000

The api is set to localhost:80

There is a config file with the apiurl and the apiKey, change it if needed.

```config.json```

## To run in dev (DOCKER)

docker-compose -f docker-compose.dev.yml up

## To run in prod (DOCKER)

docker-compose up


## API ENDPOINTS

GET `/api/results/1`  GET result with id 1

GET `/api/analysis/1`  GET analysis with id 1

GET `/api/files`  GET all files

GET `/api/bias`  GET all bias

GET `/api/analysis`  GET all analysis

GET `/api/algorithms`  GET all algorithms

POST `/api/analysis`  Create a new analysis

Schema:
```
{
    analysis_id: u23h4ou23e3, 
    file_id: 1845uehr2r2oi42ur2,
    bias_id: 234o23hu32434i,
    algorithm_id: 12u1o3h2ou13131
}
````



POST `/api/file` Upload file

Schema:
```
{
    file_id: 23423213532235325,
    file: [multipart file]
}
````


