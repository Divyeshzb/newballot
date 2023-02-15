

package main

import (
    "net/http"
    "testing"
)

func TestApiCall(t *testing.T) {
    ROOST_SVC_URL := "http://localhost:8080"
    endpoint := "/"

    // Create a request
    req, err := http.NewRequest("GET", ROOST_SVC_URL+endpoint, nil)
    if err != nil {
        t.Errorf("Error creating request: %v", err)
    }

    // Perform the request
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        t.Errorf("Error making request: %v", err)
    }

    // Check the status code is OK
    if resp.StatusCode != http.StatusOK {
        t.Errorf("Expected status code %d, got %d", http.StatusOK, resp.StatusCode)
    }
}